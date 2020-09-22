new Promise((resolve,reject) => {
  console.log('外部promise')
  resolve()
})
.then(() => {
  console.log('外部第一个then')
  new Promise((resolve,reject) => {
    console.log('内部promise')
    resolve()
  })
  .then(() => {
    console.log('内部第一个then')
    return {then(resolve){resolve()}};
  })
  .then(() => {
    console.log('内部第二个then')
  })
})
.then(() => {
  console.log('外部第二个then')
})
.then(() => {
  console.log('外部第三个then')
})
.then(() => {
  console.log('外部第四个then')
})
.then(() => {
  console.log('外部第五个then')
})				

/**
 * 预计结果：外部promise 外部第一个then 内部promise 内部第一个then 外部第二个then
 *           外部第三个then  内部第二个then 外部第四个then  外部第五个then
 * 
 */