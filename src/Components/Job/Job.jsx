import { MdLocationOn } from "react-icons/md";

const Job = ({job}) => {
    const {logo,job_title, company_name, remote_or_onsite,salary,id,job_type,location}=job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{ job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-5 py-5 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
        <button className="px-5 py-5 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
    </div>
    <div>
        <h2><MdLocationOn className="text-2xl"></MdLocationOn></h2>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary">View details</button>
    </div>
  </div>
</div>
    );
};

export default Job;