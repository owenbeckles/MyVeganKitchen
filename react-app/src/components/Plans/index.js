import React, {useContext} from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../context/ThemeContext';
import { getAllPlans } from '../../store/mealplan';
import IndividualPlan from '../IndividualPlan';

const Plans = () => {
    const { setTheme, light, dark, theme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const plans = useSelector((state) => state.plans);
    const [activePlan, setActivePlan] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    
    
    const themeChoice = theme === 'light' ? light : dark;

    useEffect(() => {
        dispatch(getAllPlans())
    }, [])

    if(!plans) return null
    
    
    
    
    return (
        <div>
            <div>
                {Object.values(plans).map((plan, i) => {
                    return (
                        <a key={i} onClick={(e) => {
                            e.preventDefault()
                            setActivePlan(plan)
                        }}>{plan.title}</a>
                    )
                })}
            </div>
            {activePlan && <IndividualPlan plan={activePlan}/>}
        </div>
    )
}

export default Plans;
