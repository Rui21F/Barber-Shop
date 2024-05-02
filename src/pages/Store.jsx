import React from 'react';
import Card from "../components/Card/Card.jsx"
import "./Store.css";

export default function Store() {
    return (
        <div className="store-container">
            <h1 className="store-title">Store</h1>
            <div className="card-container">
                <Card
                    title="Machine"
                    imageSrcList={["src/assets/machine.png", "src/assets/wahl.png"]}
                    description="Wahl Machine"
                    price="$150.00"
                />
                <Card
                    title="Razor"
                    imageSrcList={["src/assets/razor.png", "src/assets/wahl.png"]}
                    description="Wahl Razor"
                    price="$15.00"
                />
                <Card
                    title="Scissors"
                    imageSrcList={["src/assets/scissors.png", "src/assets/wahl.png"]}
                    description="Wahl Scissors"
                    price="$65.00"
                />
                <Card
                    title="Comb"
                    imageSrcList={["src/assets/pente.png", "src/assets/wahl.png"]}
                    description="Wahl Comb"
                    price="$20.00"
                />
                <Card
                title="Bottle"
                imageSrcList={["src/assets/bottle.png", "src/assets/wahl.png"]}
                description="Wahl Bottle"
                price="$15.00"
                />
            </div>
        </div>
    );
}

