import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id}= useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(jobs ,idInt);

    const handleApplyJob =()=>{
        saveJobApplication(idInt);
        toast("you have applied successfully");
    }
    return (
        <div>
            <h2>job details of : {id}</h2>
            <div className="grid md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side things</h2>
                   <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;