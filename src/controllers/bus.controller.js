
import  Bus  from "../models/Bus.model.js";
import ApiResponse from "../utils/ApiResponse.js"
import ApiError from "../utils/ApiError.js"
import asyncHandler from "../utils/asyncHandler.js"

export const createBus = asyncHandler(async(req, res)=>{
    const {busNumber, from , to, totalSeats} = req.body;
    if(!busNumber || !from ||!to || !totalSeats) throw new ApiError(400, " All fields are required");
    const existingBus= await Bus.findOne({busNumber});
    if(existingBus) throw new ApiError(409, "bus already exists")

    const bus= await Bus.create({busNumber, from, to, totalSeats});
    res.status(201).json(new ApiResponse(201, bus, "bus created successfully"));
});

export const getBuses = asyncHandler(async(req, res)=>{
    const buses = await Bus.find();
    res.status(200).json(new ApiResponse(200, buses, " Buses fetched successfully"));
});

