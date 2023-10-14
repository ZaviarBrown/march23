import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReportIndexItem from "./ReportIndexItem";
import { resetDatabase } from "../mocks/storage";
import { useEffect } from "react";
import { getReportsThunk } from "../store/reports";

const ReportIndex = () => {
    const dispatch = useDispatch();
    const reports = useSelector((store) => Object.values(store.reports)); // populate from Redux store

    useEffect(() => {
        dispatch(getReportsThunk());
    }, [dispatch]);

    /* **DO NOT CHANGE THE RETURN VALUE** */
    return (
        <section>
            <ul>
                {reports.map((report) => (
                    <ReportIndexItem report={report} key={report.id} />
                ))}
            </ul>
            <Link className="back-button new" to="/reports/new">
                New Report
            </Link>
            <button onClick={resetDatabase}>Reset the Database</button>
        </section>
    );
};

export default ReportIndex;
