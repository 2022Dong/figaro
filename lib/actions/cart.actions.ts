'use server';
 
 import { CartItem } from '@/types';
 
 export async function addItemToCart(data: CartItem) {
    return { 
        success: false, 
        message: 'Something went wrong' };
 }