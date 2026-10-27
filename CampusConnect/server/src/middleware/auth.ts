import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma';
import { Role } from '@prisma/client';
export type AuthRequest = Request & { user?: { id:string; role:Role; name:string; email:string } };
export async function authenticate(req:AuthRequest,res:Response,next:NextFunction){
 try { const h=req.headers.authorization; if(!h?.startsWith('Bearer ')) return res.status(401).json({error:'Authentication required'});
 const secret=process.env.JWT_SECRET; if(!secret) throw new Error('JWT_SECRET is not configured');
 const payload=jwt.verify(h.slice(7),secret) as {id:string}; const user=await prisma.user.findUnique({where:{id:payload.id}});
 if(!user || user.status!=='ACTIVE') return res.status(401).json({error:'Account is unavailable'});
 req.user={id:user.id,role:user.role,name:user.name,email:user.email}; next();
 } catch { return res.status(401).json({error:'Invalid or expired token'}); }
}
export function allow(...roles:Role[]){return (req:AuthRequest,res:Response,next:NextFunction)=>{if(!req.user)return res.status(401).json({error:'Authentication required'});if(!roles.includes(req.user.role))return res.status(403).json({error:'You are not allowed to perform this action'});next();};}
