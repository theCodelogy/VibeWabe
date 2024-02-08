'use client'

import DynamicDocumentary from "@/components/ui/ChannelPage/DynamicDocumentary";
import MoreDocumentary from "@/components/ui/ChannelPage/MoreDocumentary";

const page = () => {
    return (
        <div>
            <div>
                <DynamicDocumentary></DynamicDocumentary>
            </div>
            <div>
                <MoreDocumentary></MoreDocumentary>
            </div>
        </div>
    );
};

export default page;