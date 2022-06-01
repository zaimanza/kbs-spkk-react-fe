import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { kelabLogoutReducer } from '../providers/kelabProvider';
import DashboardPage from './DashboardPage';

const HomePage = () => {

    const [getTabIndex, setTabIndex] = useState(0);
    const MenuTabs = [
        { title: 'Dashboard ' },
    ];
    const dispatch = useDispatch()

    const kelabProvider = useSelector((state) => state.kelab.value);
    const navigate = useNavigate();


    const menuTabOnClick = (tabIndex) => {
        setTabIndex(tabIndex)
    }

    const switchDisplayPage = () => {
        switch (getTabIndex) {
            case 0:
                return (<DashboardPage />);
            default:
                return (<DashboardPage />);
        }
    }

    const logoutOnClick = () => {
        dispatch(
            kelabLogoutReducer()
        );
    }


    useEffect(() => {
        if (kelabProvider.kelab_id !== "") {
            navigate("/home");
        } else {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [kelabProvider]);

    useEffect(() => {
        console.log("load_page")
        console.log(kelabProvider.kelab_id)
        if (kelabProvider.kelab_id !== "") {
            navigate("/home");
        } else {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="bg-gray-50">

            <div className="flex">
                <div
                    className={`w-72 bg-white h-screen p-5  pt-8 relative duration-300 shadow`}
                >
                    <div className="flex gap-x-4 items-center">
                        <img
                            alt=""
                            className="h-32 w-32"
                            src="/logo_black.png" />
                    </div>
                    <ul className="pt-6">
                        {MenuTabs.map((Menu, index) => (
                            <button
                                key={index}
                                onClick={() => menuTabOnClick(index)}
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-50 text-gray-600 text-sm items-center gap-x-4 ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === getTabIndex && 'bg-blue-100'} `}
                            >
                                <span
                                    className={` origin-left duration-200`}
                                >
                                    {Menu.title}
                                </span>
                            </button>
                        ))}
                    </ul>
                </div>
                <div className="h-screen flex-1">
                    <nav class="border-gray-200 px-2 sm:px-4 py-2.5 bg-blue-600">
                        <div class="container flex flex-wrap justify-between items-center mx-auto">
                            <a href="https://flowbite.com" class="flex items-center">
                                <span class="self-center text-xl font-semibold whitespace-nowrap text-white">{MenuTabs[getTabIndex].title}</span>
                            </a>
                            <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                            <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                    {/* <li>
                                        <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Home</a>
                                    </li> */}
                                    <li>
                                        <button
                                            onClick={logoutOnClick}
                                            class="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white"
                                        >
                                            Logout
                                        </button>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {switchDisplayPage()}
                </div>
            </div>
        </div>
    );
}

export default HomePage