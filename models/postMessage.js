import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    creator: String,
    email : String,
    phone:String,
    address: String,
    schoolName: String,
    schoolAddress: String,
    schoolPhone: String,
    schoolEmail: String,
    
    selectedFile: String,

    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;