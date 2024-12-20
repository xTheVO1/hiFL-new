import React, { useState, useEffect } from "react";
import PageTitle from "../../components/shared/PageTitle";
import ResultCard from "../../components/teams/ResultCard";
import Filter from "../../components/teams/Filter";
import SideBar from "../../components/shared/SideBar";
import axios from "axios";
import { BeatLoader } from "react-spinners";
// import LatestNewsSideBar from "../volunteer/LatestNews";

const Results = ({ settings, seasons }) => {
  const [results, setResults] = useState([]);
  const [stages, setStages] = useState([]);
  const [currentStageId, setCurrentStageId] = useState("");
  const [loading, setLoading] = useState(false);
  const baseURL = process.env.BASE_URL;

  const fetchStages = async () => {
    setLoading(true);
    try {
      const { data: allStages } = await axios(
        `${baseURL}/leagues/league/stages/?League=${settings?.CurrentLeague?._id}`
      );
      setStages(allStages?.data);
      setLoading(false);

      if (allStages) {
        setCurrentStageId(allStages?.data[0]?._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchResults = async () => {
    setLoading(true);
    try {
      const { data } = await axios(`${baseURL}/leagues/season/fixtures/?Stage=${currentStageId}&MatchStatus=RESULT`);
      setResults(data?.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStages();
  }, []);

  useEffect(() => {
    if (currentStageId !== "") {
      fetchResults();
    }
  }, [currentStageId]);

  const handleChange = (e) => {
    const { value } = e.target;
    setCurrentStageId(value);
  };

  return (
    <div>
      <PageTitle name="Results" />
      <div className="bg-white font-redhat">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-7 xl:gap-20 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-auto mb-10">
                <Filter title="Select Season" onChange={handleChange} name="CurrentSeason" seasons={seasons} />
                <select className="select w-full border-gray-500" name="CurrentStage" onChange={handleChange}>
                  {stages &&
                    stages?.map((stage, idx) => (
                      <option className="text-red-600" key={idx} value={stage?._id}>
                        {stage?.StageName}
                      </option>
                    ))}
                </select>
              </div>

              {loading && (
                <div className="h-[400px] flex justify-center items-center">
                  <BeatLoader loading={loading} color="#000229" />
                </div>
              )}

              <div className="">
                {results.length !== 0 ? (
                  results?.map((result, idx) => <ResultCard data={result} key={idx} />)
                ) : (
                  <h1> No results available at the momment </h1>
                )}
              </div>
            </div>
            <div className="hidden lg:block w-4/12 xl:w-3/12 space-y-8">
              <div>
                {/* <LatestNewsSideBar /> */}
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

export const getStaticProps = async () => {
  try {
    const baseURL = process.env.BASE_URL;
    const { data, errors } = await axios(`${baseURL}/settings/setting/league/?CurrentLeagueName=HiFL`);
    const { data: seasons } = await axios(`${baseURL}/leagues/seasons/`);

    if (!data || errors) {
      return { notFound: true };
    }

    return {
      props: {
        settings: data.data,
        seasons: seasons.data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};
