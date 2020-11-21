import { Mongoose } from "mongoose";
import Employee from "../../../model/Employee";
import mongoose from "mongoose";

export default {
  Query: {
    getAllEmp: async (_, args) => {
      try {
        const viewAllEmps = await Employee.find({}, {});

        return viewAllEmps;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },

  Mutation: {
    addEmp: async (_, args) => {
      try {
        const { name, attitude, team, birth } = args;

        const empResult = await Employee.create({
          name,
          attitude,
          team,
          birth,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deleteEmp: async (_, args) => {
      try {
        const { id } = args;

        const deleteResult = await Employee.deleteOne({ _id: id });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    updateEmp: async (_, args) => {
      try {
        const { id, attitude } = args;

        const updateEmp = await Employee.updateOne(
          {
            _id: id,
          },
          {
            $set: {
              attitude,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
