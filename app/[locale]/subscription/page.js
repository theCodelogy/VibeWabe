import PrivateRoute from '@/utils/PraivetRoute/PraivetRoute';
import SubscriptionCard from '@/components/Subscription/SubscriptionCard';
import React from 'react';

const page = () => {
    return (
        <div>
            <PrivateRoute>
            <SubscriptionCard/>
            </PrivateRoute>
        </div>
    );
};

export default page;