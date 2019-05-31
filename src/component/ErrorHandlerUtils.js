'use strict';
/**
 *  错误拦截处理
 * 
 * @author zhiyahan
 * @date 2019-5-20
 *
 */

  /**
   * js 异常
   *
   * @param {*} errorHandler  a function 捕获error后的回调处理
   * @param {*} allowIntercept 是否拦截异常
   */
  export const setJsExceptionHandler = (errorHandler = ()=>{}, allowIntercept = false)=>{

    if(typeof errorHandler !== 'function'){
        console.log('Parameter type error, it must be a function')
        return;
    }
    //在发布环境才处理拦截动作
    let allowed = allowIntercept ? true : !__DEV__ ;
    
    if(allowed){
        global.ErrorUtils.setGlobalHandler(errorHandler);
        console.error = (message, error) => global.ErrorUtils.reportError(error);
    }

  }


  /**
   * 获取异常
   */
  export const getJsExceptionHandler = () => global.ErrorUtils.getGlobalHandler();


  export default {
    setJsExceptionHandler,
    getJsExceptionHandler,
}