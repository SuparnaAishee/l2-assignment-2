import Arittra from "./ArittraInfo.model";


export const ArittraServices = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async createArittra(data: any) {
    const newEntry = new Arittra(data);
    return await newEntry.save();
  },

  async getAllArittras() {
    return await Arittra.find();
  },

  async getSingleArittra(id: string) {
    return await Arittra.findById(id);
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async updateArittra(id: string, updateData: any) {
    return await Arittra.findByIdAndUpdate(id, updateData, { new: true });
  },

  async deleteArittra(id: string) {
    return await Arittra.findByIdAndDelete(id);
  },
};
