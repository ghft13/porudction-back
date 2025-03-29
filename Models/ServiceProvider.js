const mongoose=require('mongoose')

const ServiceProviderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobnumber: { type: String, required: true, unique: true }, 
  total_clients:{type:Number,default:0},
  total_Appointments:{type:Number,default:0},
  earnings:{type:Number,default:0},
  Rating:{type:Number,default:0},
  role: { type: String, enum: ['provider'], default: 'provider' },
 
},
{ timestamps: true })

 const ServiceProvider = mongoose.model('ServiceProvider', ServiceProviderSchema);

 module.exports=ServiceProvider