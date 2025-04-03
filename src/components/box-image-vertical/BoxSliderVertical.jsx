// src/components/box-image-vertical/BoxSliderVertical.jsx
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { dsnCN } from '../../hooks/helper';
import './style.scss';

const BoxSliderVertical = ({ className, children }) => {
    // Предполагаем, что children содержит два элемента: текст и слайдер
    const content = children[0]; // Текст
    const slider = children[1]; // Слайдер (Swiper)

    return (
        <div className={dsnCN('box-gallery-vertical', className)}>
            <div className="mask-bg background-section" />
            <Container>
                <Row>
                    <Col xl={5} className="item-box">
                        <div className="inner-img p-relative">
                            {slider} {/* Заменяем ParallaxImage на переданный Swiper */}
                        </div>
                    </Col>
                    <Col xl={7} className="item-box">
                        <div className="box-text">
                            {content}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BoxSliderVertical;