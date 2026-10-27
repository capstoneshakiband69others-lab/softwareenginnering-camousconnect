import {Request,Response,NextFunction} from 'express';
export function notFound(_req:Request,res:Response){res.status(404).json({error:'Resource not found'});}
export function errorHandler(err:any,_req:Request,res:Response,_next:NextFunction){console.error(err);if(err?.code==='P2002')return res.status(409).json({error:'A record with this information already exists'});if(err?.name==='ZodError')return res.status(400).json({error:'Invalid input',details:err.issues});return res.status(500).json({error:'Internal server error'});}
