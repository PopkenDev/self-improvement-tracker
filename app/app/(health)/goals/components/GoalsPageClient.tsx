"use client";

import { Button } from "@/components/ui/button";
import { FormErrorMsg } from "@/components/ui/form-error";
import { FormItem } from "@/components/ui/form-item";
import { FormLabel } from "@/components/ui/form-label";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { BMRschema, FormData } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiArrowDropDownLine } from "@remixicon/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const GoalsPageClient = () => {
  const [openModal, setOpenModal] = useState(false);
  const [result, setResult] = useState({
    bmi: 0,
    bmr: 0,
    tdee: 0,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(BMRschema),
  });

  const calculateBMR = (data: any) => {
    const { age, weight, height } = data;
    let BMR;

    if (data.gender === "male") {
      BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    return BMR;
  };

  const calculateBMI = (data: any) => {
    const { weight, height } = data;
    const heightInMeters = height / 100;
    const heightInSquare = heightInMeters * heightInMeters;
    const BMI = weight / heightInSquare;

    return BMI;
  };

  const onSubmit = (data: FormData) => {
    const bmr = calculateBMR(data);
    const bmi = calculateBMI(data);
    console.log(bmr, bmi);

    setResult({ bmi, bmr, tdee: 0 });
  };

  return (
    <div>
      <section className="px-4">
        <button
          className="card w-full rounded-md px-8 py-12"
          onClick={() => setOpenModal(true)}
        >
          <p className="text-xl font-semibold text-gray-200">
            Calorie behoefte berekenen
          </p>
        </button>
        {openModal && (
          <Modal onClose={() => setOpenModal(false)}>
            <div className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <FormItem>
                  <FormLabel name="gender">What is your gender?</FormLabel>
                  <div className="relative">
                    <select
                      className="light-shadow w-full rounded-md bg-[#121212] px-3 py-2.5 text-gray-600 outline-none"
                      style={{ WebkitAppearance: "none" }}
                      {...register("gender")}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <span>
                      <RiArrowDropDownLine className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-600" />
                    </span>
                  </div>
                  {errors.gender && (
                    <FormErrorMsg>{errors.gender.message}</FormErrorMsg>
                  )}
                </FormItem>
                <FormItem>
                  <FormLabel name="age">Wat is je leeftijd?</FormLabel>
                  <Input
                    {...register("age")}
                    name="age"
                    placeholder="eg. 30"
                    variant="default"
                    required={true}
                    type="number"
                  />
                  {errors.age && (
                    <FormErrorMsg>{errors.age.message}</FormErrorMsg>
                  )}
                </FormItem>
                <FormItem className="relative">
                  <FormLabel name="weight">Wat is je gewicht?</FormLabel>
                  <div className="relative">
                    <Input
                      {...register("weight")}
                      name="weight"
                      placeholder="eg. 100"
                      variant="default"
                      required={true}
                      type="number"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600">
                      kilogram
                    </span>
                  </div>
                  {errors.weight && (
                    <FormErrorMsg>{errors.weight.message}</FormErrorMsg>
                  )}
                </FormItem>
                <FormItem>
                  <FormLabel name="height">Wat is je lengte?</FormLabel>
                  <div className="relative">
                    <Input
                      {...register("height")}
                      name="height"
                      placeholder="eg. 190"
                      variant="default"
                      required={true}
                      type="number"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600">
                      centimeter
                    </span>
                  </div>
                  {errors.height && (
                    <FormErrorMsg>{errors.height.message}</FormErrorMsg>
                  )}
                </FormItem>
                <FormItem>
                  <FormLabel name="gender">
                    What is your activity level?
                  </FormLabel>
                  <div className="relative">
                    <select
                      className="light-shadow w-full rounded-md bg-[#121212] px-3 py-2.5 text-gray-600 outline-none"
                      style={{ WebkitAppearance: "none" }}
                      {...register("gender")}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <span>
                      <RiArrowDropDownLine className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-600" />
                    </span>
                  </div>
                  {errors.gender && (
                    <FormErrorMsg>{errors.gender.message}</FormErrorMsg>
                  )}
                </FormItem>
                <Button type="submit" variant="default" className="w-full">
                  Calculate BMR
                </Button>
              </form>
              <div className="mt-4">
                <p className="font-semibold text-gray-200">Result:</p>
                {result.bmi > 1 && (
                  <p className="text-gray-300">
                    <strong>BMI: </strong>
                    {result.bmi.toFixed()}
                  </p>
                )}
                {result.bmr > 1 && (
                  <p className="text-gray-300">
                    <strong>BMR: </strong>
                    {result.bmr.toFixed()} calories/day
                  </p>
                )}
              </div>
            </div>
          </Modal>
        )}
      </section>
    </div>
  );
};
