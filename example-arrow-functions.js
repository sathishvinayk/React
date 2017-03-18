var names=['Andrew','Jen','Julie'];

var person={
  name:'Andrew',
  greet:function(){
    names.forEach((name)=>{
      console.log(this.name+'say hi to '+name)
    })
  }
};
