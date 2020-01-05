function EventEmitter() {}

EventEmitter.prototype.addEventListener = function(event, fn) {
  var eventMap = (this.__events = this.__events || {});
  var handlerList = (eventMap[event] = eventMap[event] || []);
  handlerList.push(fn);
};

EventEmitter.prototype.removeEventListener = function(event, fn) {
  var eventMap = (this.__events = this.__events || {});
  var handlerList = eventMap[event];
  if (handlerList) {
    var index = handlerList.indexOf(fn);
    if (index >= 0) {
      handlerList.splice(index, 1);
    }
  }
};

EventEmitter.prototype.emit = function(event, arg1, arg2, arg3, arg4, arg5) {
  var eventMap = (this.__events = this.__events || {});
  var handlerList = eventMap[event];
  if (handlerList) {
    for (var i = 0; i < handlerList.length; i++) {
      var fn = handlerList[i];
      fn.call(this, arg1, arg2, arg3, arg4, arg5);
    }
  }
};

function EventEmitterProxy(object) {
  this._object = object;
  this._emitter = new EventEmitter(this);
  this._listenerArguments = [];
}

EventEmitterProxy.prototype.object = function() {
  return this._object;
};

EventEmitterProxy.prototype.setObject = function(object) {
  var oldObject = this._object;
  var newObject = object;

  if (oldObject) {
    this._listenerArguments.forEach(function(args) {
      oldObject.removeEventListener.apply(oldObject, args);
    });
  }

  if (newObject) {
    this._listenerArguments.forEach(function(args) {
      newObject.addEventListener.apply(newObject, args);
    });
  }

  this._object = newObject;
  this._emitter.emit("objectChange");
};

EventEmitterProxy.prototype.addEventListener = function() {
  var ret = null;
  if (this._object) {
    this._object.addEventListener.apply(this._object, arguments);
  }

  this._listenerArguments.push(arguments);

  return ret;
};

EventEmitterProxy.prototype.removeEventListener = function() {
  var ret = null;
  if (this._object) {
    this._object.removeEventListener.apply(this._object, arguments);
  }

  this._removeFromListenerArguments(arguments);

  return ret;
};

EventEmitterProxy.prototype.addEventListenerProxy = function() {
  this._emitter.addEventListener.apply(this._emitter, arguments);
};

EventEmitterProxy.prototype.removeEventListenerProxy = function() {
  this._emitter.removeEventListener.apply(this._emitter, arguments);
};

EventEmitterProxy.prototype._removeFromListenerArguments = function(args) {
  for (var i = 0; i < this._listenerArguments.length; i++) {
    var toCompare = this._listenerArguments[i];
    if (toCompare.length === args.length) {
      var equal = true;
      for (var j = 0; j < toCompare.length; j++) {
        if (toCompare[j] !== args[j]) {
          equal = false;
          break;
        }
      }
      if (equal) {
        this._listenerArguments.splice(i, 1);
        i--;
      }
    }
  }
};

export default EventEmitterProxy;
