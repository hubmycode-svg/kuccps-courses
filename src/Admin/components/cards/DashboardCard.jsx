import { Link } from "react-router-dom";
import "./DashboardCard.css";

function DashboardCard({
  title,
  subtitle,
  buttonText,
  path,
  color,
  icon,
}) {
  return (
    <div
      className="dashboard-card"
      style={{ backgroundColor: color }}
    >
      <div className="card-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{subtitle}</p>

      <Link
        to={path}
        className="card-button"
      >
        {buttonText}
      </Link>
    </div>
  );
}

export default DashboardCard;