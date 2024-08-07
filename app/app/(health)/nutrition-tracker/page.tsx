import { auth, signOut } from "@/auth";

import { NutritionTrackerClient } from "./components/nutrition-tracker-client";

const NutritionTrackerPage = async () => {
  const session = await auth();
  return (
    <main className="flex flex-col justify-center p-4">
      {/* <div className="h-24">
        <p className="text-white">{JSON.stringify(session)}</p>
      </div> */}
      <NutritionTrackerClient />
    </main>
  );
};

export default NutritionTrackerPage;
