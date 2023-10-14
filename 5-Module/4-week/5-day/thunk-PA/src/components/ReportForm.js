import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createReportThunk, editReportThunk } from "../store/reports";

const ReportForm = ({ report, formType }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState(report?.understanding);
    const [improvement, setImprovement] = useState(report?.improvement);
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({});
        report = { ...report, understanding, improvement };

        const res = await dispatch(
            formType === "Update Report"
                ? editReportThunk(report)
                : createReportThunk(report)
        );

        if (res.id) {
            history.push(`/reports/${res.id}`);
        } else {
            setErrors(res.errors);
        }
    };

    /* **DO NOT CHANGE THE RETURN VALUE** */
    return (
        <form onSubmit={handleSubmit}>
            <h2>{formType}</h2>
            <div className="errors">{errors.understanding}</div>
            <label>
                Understanding:
                <input
                    type="text"
                    value={understanding}
                    onChange={(e) => setUnderstanding(e.target.value)}
                />
            </label>
            <div className="errors">{errors.improvement}</div>
            <label>
                Improvement:
                <textarea
                    value={improvement}
                    onChange={(e) => setImprovement(e.target.value)}
                />
            </label>
            <button type="submit">{formType}</button>
        </form>
    );
};

export default ReportForm;
