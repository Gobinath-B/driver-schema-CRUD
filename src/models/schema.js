
//I command some unwanted properties


const express = require("express");
const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
     // Base details
  driverId: { type: String, required: true }, //generated
  uid: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNum: { type: String, required: true },
//   profileImage: { type: String, required: true },
//   amount: { type: Number, required: true },
//   notificationToken: { type: String, required: true },
//   currentDistrict: { type: String, required: true },
//   deviceId: { type: String },


//   razorpayContactId: String,
//   razorpayFundAccountId: String,
//   razorpayFundAccount: Object,

  currentStats: {
    distanceTravelled: { type: Number, default: 0 },
    localTrip: { type: Number, default: 0 },
    rentalTrip: { type: Number, default: 0 },
    outstationTrip: { type: Number, default: 0 },
    moneyEarned: { type: Number, default: 0 },
    createdAt: Date,
  },

  totalStats: {
    type: [{
      distanceTravelled: Number,
      localTrip: Number,
      rentalTrip: Number,
      outstationTrip: Number,
      moneyEarned: Number,
      createdAt: Date,
      mins: Number
    }],
    default: []
  },
//   awardedIncentives: [],
//   //!----
//   driverAddress: {
//     district: { type: String },
//     address: { type: String },
//     state: { type: String },
//   },
//   ratingCountArray: {
//     type: [Number],
//     min: 6,
//     max: 6,
//     default: () => new Array(6).fill(0)
//   },
//   rating: { type: String, default: '0' },
//   totalRating: { type: Number, default: 0 },
//   currentBookingId: { type: String },
  location: {
    position: { type: [Number] },
    speed: { type: Number },
    heading: { type: Number },
  },
//   isAlreadyLoggedIn: { type: Boolean, default: false },
//   isOnRide: { type: Boolean, default: false },
//   isRejected: { type: Boolean, default: false },
// //   rejection: {
// //     type: {
// //       type: String,
// //       enum: {
// //         values: rejectionTypes,
// //        // message: `{VALUE} is invalid. accepted values [\"${rejectionTypes.join(',')}\"]`
// //       },
// //     },
// //     reason: { type: String }
// //   },
//   mobileMeta: { type: Object },
//   totalHoursOnline: { type: Number, default: 0 },
//   cancelledCount: { type: Number, default: 0 },
//   totalKmTravelled: { type: Number, default: 0 },
//   totalMoneyEarned: { type: Number, default: 0 },
//   totalTripTaken: { type: Number, default: 0 },
//   // Vehicle
//   currentVehicleIndex: { type: Number },
//   currentCarType: { type: String },
//   currentCarName: { type: String },
//   currentCarNumber: { type: String },
//   acceptedServiceType: {
//     type: [String],
//     default: ['local', 'outstation', 'hourRental']
//   },
//   acceptedCarType: [String],
//   carDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }],
//   // Booleans
//   isDriverDisabled: { type: Boolean, default: false },
//   isAvailable: { type: Boolean, default: true },
//   isAdminVerified: { type: Boolean, default: false },
//   isOnline: { type: Boolean, default: false },
//   isDocsUploaded: { type: Boolean, default: false },
//   isAadharVerifiedFront: { type: Boolean, default: false },
//   isAadharVerifiedBack: { type: Boolean, default: false },
//   isAadharRejectedFront: { type: Boolean, default: false },
//   isAadharRejectedBack: { type: Boolean, default: false },
//   isDlVerifiedFront: { type: Boolean, default: false },
//   isDlVerifiedBack: { type: Boolean, default: false },
//   isDlRejectedFront: { type: Boolean, default: false },
//   isDlRejectedBack: { type: Boolean, default: false },

//   aadharFront: { type: String },
//   aadharBack: { type: String },
//   dlFront: { type: String },
//   dlBack: { type: String },
//   dlExpiry: {
//     type: Date,
//     default: () => addDays(new Date(), 10)
//   },

//   lastOnlineAt: {
//     type: Date,
//   },
//   lastLoginAt: {
//     type: Date,
//   },
//   locationLastUpdatedAt: {
//     type: Date,
//   },
//   accountCreatedAt: {
//     type: Date,
//   },
//   refreshToken: { type: String, default: 'not-set' }
})
const DriverModel = mongoose.model("Driver",DriverSchema);

module.exports = DriverModel;