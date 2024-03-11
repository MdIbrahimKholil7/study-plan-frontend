// pages/index.tsx

import { useRouter } from "next/router";
import { useAppDispatch } from "../../utils/hooks";
import { useGetUserQuery } from "../../redux/features/auth/authApi";
import { useEffect } from "react";
import { addUserDetails } from "../../redux/features/auth/authSlice";
import { useGetStudyPlanQuery } from "../../redux/features/studyPlan/studyApi";
import { StudySession } from "../../redux/features/studyPlan/studySlice";

const HomePage = () => {
  const router = useRouter();

  const { isLoading, error, isError, data, isSuccess } = useGetUserQuery({});
  const {
    error: studyError,
    data: studyData,
    isSuccess: studySuccess,
  } = useGetStudyPlanQuery({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(addUserDetails(data?.data));
    }
  }, [data, dispatch, isSuccess]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-white text-2xl font-semibold">Study Planner</h1>
          {data?.data?.name && (
            <p className="text-white text-sm font-semibold">
              {data?.data?.name}
            </p>
          )}
        </div>
      </header>
      <main className="min-h-screen">
        <div className="container mx-auto py-8 mt-20 w-full flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Welcome to Study Planner
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Plan your study sessions efficiently and stay organized.
            </p>

            {error?.data?.message && (
              <div className="flex justify-center">
                <button
                  onClick={() => router.push("/login")}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md mr-4"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => router.push("/login")}
                  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-md"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="px-24">
          {studyData?.data?.length > 0 ? (
            <div>
              <div className=" rounded-lg overflow-hidden  mx-auto p-6 ">
                <div className="text-center text-bold px-4 py-2 mb-20">
                  <h2 className="text-xl font-semibold">Study Plan Details</h2>
                </div>
                <div className="flex justify-evenly items-center flex-wrap gap-4">
                  {studyData?.data?.map((elm: StudySession) => (
                    <div
                      key={elm?._id}
                      className="w-80 border-blue-500 rounded-md  hover:border-blue-300 focus:ring hover:ring-blue-200 hover:ring-opacity-50 outline-none p-2 border-[0.5px] "
                    >
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-1">
                          Subject: {elm.subject}
                        </h3>
                        <p>
                          Duration:{" "}
                          {elm.duration / 60 === 0 ? 1 : elm.duration / 60}{" "}
                          Hours
                        </p>
                        {elm.priority === 1 && <p>Priority: Low</p>}
                        {elm.priority === 2 && <p>Priority: Medium</p>}
                        {elm.priority === 3 && <p>Priority: High</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">No Study Plan Found</div>
          )}
        </div>
      </main>
      <footer className="bg-gray-300 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            © 2024 Study Planner. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
