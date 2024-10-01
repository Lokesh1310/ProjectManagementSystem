import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectList from './pages/ProjectList';
import Loader from './components/Loader';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import ProjectDetails from './pages/ProjectDetails';
import IssueDetails from './pages/IssueDetails';
import Subscription from './pages/Subscription';
import Auth from './pages/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './Redux/Auth/Action';
import { fetchProjects } from './Redux/project/Action';
import AcceptInvitation from './pages/AcceptInvitation';



function App() {
    const { auth } = useSelector(store => store);
    const dispatch = useDispatch();

    useEffect(() => {
    
    
        dispatch(getUser())
        dispatch(fetchProjects({}))
     
    }, [auth.jwt]);

    console.log(auth);

    return (
        <>
            {auth.user ? (
                <div>
                    <NavBar />
                    <Routes>

                        <Route path='/' element={<Home />} />
                        <Route path='/project/:id' element={<ProjectDetails />} />
                        <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails />} />
                        <Route path='/upgrade_plan' element={<Subscription />} />
                       
                        <Route path='/accept_invitation' element={<AcceptInvitation />} />
                         
                        
                    </Routes>
                </div>
            ) : (
                <Auth />
            )}
        </>
    );
}

export default App;