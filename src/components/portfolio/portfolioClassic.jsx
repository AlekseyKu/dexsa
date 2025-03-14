import React, {useEffect, useRef, useState} from 'react'
import './style.scss'
import PortfolioItem from './PortfolioItem';
import {getPortfolioData} from "../../api/portfolio/PortfolioData";
import DsnGrid, {DsnGridProps} from "../DsnGrid";
import FilterPortfolio from "./FilterPortfolio";
import Isotope from "isotope-layout";
import {dsnCN} from "../../hooks/helper";


const PortfolioClassic = ({className, ...restProps}: DsnGridProps) => {
    const dataPortfolio = getPortfolioData();
    const iso = useRef();
    const [filter , setFilter] = useState('*');
    const refIsotope = useRef();
    const category = new Set();
    dataPortfolio.map((p) => {
        return typeof p.category === "object" ? p.category.map(i => category.add(i)) : category.add(p.category)
    });


    useEffect(() => {
        iso.current = new Isotope(refIsotope.current, {itemSelector: '.portfolio-item'});

        return () => {
            iso.current.destroy();
        }
    });

    useEffect(()=>{
        iso.current.arrange({filter : filter});
    },[filter])



    return (
        <section className={dsnCN('dsn-portfolio port-classic' , className)}>
            <FilterPortfolio className="mb-80" categories={[...category]} actionFilter={setFilter}/>
            <DsnGrid {...restProps} ref={refIsotope} >
                {dataPortfolio.map((item, index) =>
                    <PortfolioItem
                        className={typeof item.category === "object" ? item.category.join(" ").toLowerCase() : item.category.toLowerCase()}
                        key={index} portoDetails={item} textButton="View Case"/>)}
            </DsnGrid>
        </section>
    );
}


export default PortfolioClassic