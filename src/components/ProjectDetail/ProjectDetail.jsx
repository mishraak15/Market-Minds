import "./ProjectDetail.css";
export default function ProjectDetail({project,setProject, title, desc, index }) {
  return (
    <div
      style={index === project ? { backgroundColor: "#FF3147", color: "white" } : {}}
      onClick={()=>setProject(index)}
      className="ProjectDetail"
    >
      <span>{title}</span>
      <p>{desc}</p>
    </div>
  );
}
