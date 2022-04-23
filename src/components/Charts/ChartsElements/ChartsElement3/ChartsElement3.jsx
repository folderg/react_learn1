import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';




const App = () => (
    <div className="col-lg-6">
    <div className="row mb-3">
        <div className="col-xl-6">
            <section className="card card-featured-left card-featured-primary mb-3">
                <div className="card-body">
                    <div className="widget-summary">
                        <div className="widget-summary-col widget-summary-col-icon">
                            <div className="summary-icon bg-primary">
                                <i className="fas fa-life-ring"></i>
                            </div>
                        </div>
                        <div className="widget-summary-col">
                            <div className="summary">
                                <h4 className="title">Support Questions</h4>
                                <div className="info">
                                    <strong className="amount">1281</strong>
                                    <span className="text-primary">(14 unread)</span>
                                </div>
                            </div>
                            <div className="summary-footer">
                                <a className="text-muted text-uppercase" href="#">(view all)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="col-xl-6">
            <section className="card card-featured-left card-featured-secondary">
                <div className="card-body">
                    <div className="widget-summary">
                        <div className="widget-summary-col widget-summary-col-icon">
                            <div className="summary-icon bg-secondary">
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                        </div>
                        <div className="widget-summary-col">
                            <div className="summary">
                                <h4 className="title">Total Profit</h4>
                                <div className="info">
                                    <strong className="amount">$ 14,890.30</strong>
                                </div>
                            </div>
                            <div className="summary-footer">
                                <a className="text-muted text-uppercase" href="#">(withdraw)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div className="row">
        <div className="col-xl-6">
            <section className="card card-featured-left card-featured-tertiary mb-3">
                <div className="card-body">
                    <div className="widget-summary">
                        <div className="widget-summary-col widget-summary-col-icon">
                            <div className="summary-icon bg-tertiary">
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                        </div>
                        <div className="widget-summary-col">
                            <div className="summary">
                                <h4 className="title">Today's Orders</h4>
                                <div className="info">
                                    <strong className="amount">38</strong>
                                </div>
                            </div>
                            <div className="summary-footer">
                                <a className="text-muted text-uppercase" href="#">(statement)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="col-xl-6">
            <section className="card card-featured-left card-featured-quaternary">
                <div className="card-body">
                    <div className="widget-summary">
                        <div className="widget-summary-col widget-summary-col-icon">
                            <div className="summary-icon bg-quaternary">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <div className="widget-summary-col">
                            <div className="summary">
                                <h4 className="title">Today's Visitors</h4>
                                <div className="info">
                                    <strong className="amount">3765</strong>
                                </div>
                            </div>
                            <div className="summary-footer">
                                <a className="text-muted text-uppercase" href="#">(report)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
);

export default App;
