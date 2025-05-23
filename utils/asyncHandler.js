const asyncHandler = function (requestHandler) {
       return function (req, res, next) {
              Promise.resolve(requestHandler(req, res, next)).
                     catch((err) => next(err))
       }
}
export { asyncHandler }


// cosnt asyncHandler = (fn) => { () => { } }
// const asyncHandler = (fn) => async (req,res,next) => {
//    try{
//              await fn(req,res,next)
//    }
//    catch(err){
//     res.status(err.code || 500).json({
//         success:false,
//         message:err.message
//     })
//    }
// }