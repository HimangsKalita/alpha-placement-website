import { APPLY } from "../constants/applyConstant";

export const applyforjob = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/job/${id}`);
  
    dispatch({
      type: APPLY,
      payload: {
        job: data.job._id,
        name: data.job.name,
        ctc: data.job.price,
        image: data.job.images[0].url,
      },
    });
  
    localStorage.setItem("applyItems", JSON.stringify(getState().apply.applyItems));
  };
  
  