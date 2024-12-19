import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
    return (
        <div>
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};

export default PublicLayout;