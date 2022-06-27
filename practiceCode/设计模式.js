// 工厂模式
// 简单工厂模式
class User {
    constructor(opt) {
      this.name = opt.name;
      this.viewPage = opt.viewPage;
    }
  
    static getInstance(role) {
      switch (role) {
        case 'superAdmin':
          return new User({ name: '超级管理员', viewPage: ['首页', '通讯录', '发现页', '应用数据', '权限管理'] });
        case 'admin':
          return new User({ name: '管理员', viewPage: ['首页', '通讯录', '发现页', '应用数据'] });
        case 'user':
          return new User({ name: '普通用户', viewPage: ['首页', '通讯录', '发现页'] });
        default:
          throw new Error('参数错误, 可选参数:superAdmin、admin、user')
      }
    }
}
let superAdmin = User.getInstance('superAdmin');
let admin = User.getInstance('admin');
let normalUser = User.getInstance('user');

// 工厂方法模式
class User {
    constructor(name = '', viewPage = []) {
      if(new.target === User) {
        throw new Error('抽象类不能实例化!');
      }
      this.name = name;
      this.viewPage = viewPage;
    }
}
  
class UserFactory extends User {
    constructor(name, viewPage) {
      super(name, viewPage)
    }
    create(role) {
      switch (role) {
        case 'superAdmin': 
          return new UserFactory( '超级管理员', ['首页', '通讯录', '发现页', '应用数据', '权限管理'] );
        case 'admin':
          return new UserFactory( '普通用户', ['首页', '通讯录', '发现页'] );
        case 'user':
          return new UserFactory( '普通用户', ['首页', '通讯录', '发现页'] );
        default:
          throw new Error('参数错误, 可选参数:superAdmin、admin、user')
      }
    }
}

let userFactory = new UserFactory();
let superAdmin = userFactory.create('superAdmin');
let admin = userFactory.create('admin');
let user = userFactory.create('user');

// 单例模式 不透明
function Singleton(name) {
  this.name = name;
}
// 原型扩展类的一个方法getName()
Singleton.prototype.getName = function() {
  console.log(this.name)
};
// 获取类的实例
Singleton.getInstance = (function() {
  let instance = null;
  return function(name) {
      if(!this.instance) {
          this.instance = new Singleton(name);
      }
      return this.instance
  }        
})();

// 获取对象1
var a = Singleton.getInstance('a');
// 获取对象2
var b = Singleton.getInstance('b');
// 进行比较
console.log(a === b);
// 单例模式 透明
function CreateSingleton (name) {
  this.name = name;
  // 打印名字
  this.getName();
};

// 获取实例的名字
CreateSingleton.prototype.getName = function() {
  console.log(this.name)
};
// 单例对象
var Singleton = (function(){
  let instance;
  return function (name) {
      if(!instance) {
          instance = new CreateSingleton(name);
      }
      return instance;
  }
})();

// 创建实例对象1
var a = new Singleton('a');
// 创建实例对象2
var b = new Singleton('b');

console.log(a===b);

