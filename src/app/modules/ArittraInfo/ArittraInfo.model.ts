import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon:{type:String,required:true},
});

const experienceSchema = new mongoose.Schema({
  id: { type: String, required: true },
  position: { type: String, required: true },
  companyName: { type: String, required: true },
  year: { type: String, required: true },
});

const educationSchema = new mongoose.Schema({
  id: { type: String, required: true },
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  year: { type: String, required: true },
});

const skillSchema = new mongoose.Schema({
  id: { type: String, required: true },
  skillName: { type: String, required: true },
  image: { type: String, required: true },
  percent: { type: Number, required: true },
});

const arittraSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    resume: { type: String, required: true },
    services: [serviceSchema],
    experiences: [experienceSchema],
    education: [educationSchema],
    skills: [skillSchema],
  },
  { timestamps: true },
);

const Arittra = mongoose.model('Arittra', arittraSchema);

export default Arittra;
