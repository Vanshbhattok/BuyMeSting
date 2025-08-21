"use server"

import RazorPay from "razorpay"
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    let user = await User.findOne({ username: to_username })
    const secret = user.razorpaysecret
    var instance = new RazorPay({ key_id: user.razorpayid, key_secret: secret})

let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
}
let x = await instance.orders.create(options)

//pending order
await Payment.create({oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message:
    paymentform.message})
    return x
}

export const fetchuser = async (username) => {
    await connectDB()
    let u = await User.findOne({ username })
    if (!u) return null

    const user = u.toObject()
    return {
        ...user,
        _id: user._id.toString(),
        createdAt: user.createdAt?.toISOString(),
        updatedAt: user.updatedAt?.toISOString(),
    }
}


export const fetchpayments = async (username) => {
    await connectDB()
    let p = await Payment.find({ to_user: username, done: true}).sort({ amount: -1 }).lean()

    return p.map(pay => ({
        ...pay,
        _id: pay._id.toString(),
        createdAt: pay.createdAt?.toISOString(),
        updatedAt: pay.updatedAt?.toISOString(),
    }))
}

export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = data;

    // If the username is being updated, check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }   
        await User.updateOne({email: ndata.email}, ndata)
        // Now update all the usernames in the Payments table 
        await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
        
    }
    else{

        
        await User.updateOne({email: ndata.email}, ndata)
    }


}

