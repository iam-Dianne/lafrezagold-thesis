import React from "react";
import GuestsTable from "../../components/Admin/GuestsTable";

const StaffGuests = () => {
    return (
        <div className="all-guests text-gray-900 mt-2">
            <section>
                <GuestsTable />
            </section>
        </div>
    )
}

export default StaffGuests
