import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import ProjectsItem from './ProjectsItem';
import { getProjectsData } from '../../api/projects/ProjectsData';
import DsnGrid, { DsnGridProps } from '../DsnGrid';
import FilterProjects from './FilterProjects';
import Isotope from 'isotope-layout';
import { dsnCN } from '../../hooks/helper';

const ProjectsClassic = ({ className, ...restProps }: DsnGridProps) => {
    const dataProjects = getProjectsData();
    const iso = useRef();
    const [filter, setFilter] = useState('*');
    const refIsotope = useRef();
    const category = new Set();

    // Собираем категории
    dataProjects.forEach((p) => {
        if (typeof p.category === 'object') {
            p.category.forEach((i) => category.add(i));
        } else {
            category.add(p.category);
        }
    });

    useEffect(() => {
        iso.current = new Isotope(refIsotope.current, { itemSelector: '.portfolio-item' });

        return () => {
            iso.current.destroy();
        };
    }, []);

    useEffect(() => {
        iso.current.arrange({ filter: filter });
    }, [filter]);

    return (
        <section className={dsnCN('dsn-portfolio port-classic', className)}>
            <FilterProjects
                className="mb-80"
                categories={[...category]} // Передаем оригинальные категории для отображения
                actionFilter={(cat) => {
                    // Если cat пустой, показываем все элементы
                    if (!cat) {
                        setFilter('*');
                    } else {
                        // Преобразуем категорию в селектор (например, ".major-projects")
                        const formattedCat = cat.toLowerCase().replace(/\s+/g, '-');
                        setFilter(`.${formattedCat}`);
                    }
                }}
            />
            <DsnGrid {...restProps} ref={refIsotope}>
                {dataProjects.map((item, index) => (
                    <ProjectsItem
                        className={
                            typeof item.category === 'object'
                                ? item.category
                                      .map((cat) => cat.toLowerCase().replace(/\s+/g, '-'))
                                      .join(' ')
                                : item.category.toLowerCase().replace(/\s+/g, '-')
                        }
                        key={index}
                        portoDetails={item}
                        textButton="View Case"
                    />
                ))}
            </DsnGrid>
        </section>
    );
};

export default ProjectsClassic;