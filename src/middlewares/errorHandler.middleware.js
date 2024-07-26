
export function errorHandler(err, req, res, next) {
    console.error('ERROR: ', err); 
    res.status(err.status || 500).send(err.message || 'Internal Server Error'); 
}
