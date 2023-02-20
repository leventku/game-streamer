import { useState } from "react";
import { View } from "../types";
import "./app.css";
import { CatalogScreen } from "./views/catalog";
import { StreamDetailScreen } from "./views/streamDetail";

const App = () => {
    const [view, setView] = useState<View>({type: 'catalog' })

    const onSetView = (newView: View) => setView(newView)

    return (
        <div className="app">
            <div className="app-row">
                <div className="top-bar">
                    {view.type === 'detail' 
                        ? <button
                        className="back-btn"
                        onClick={() => {setView({type: 'catalog'})}}
                        >Back
                        </button>
                        : null
                    }
                    <h1>Game streamer</h1>
                </div>
            </div>
            <div className="divider"></div>
            <div className="app-row">
                {view.type === 'catalog'
                    ? <CatalogScreen onSetView={onSetView} />
                    : <StreamDetailScreen
                            id={view.id} 
                            name={view.name} 
                            streamer={view.streamer} 
                            game={view.game} 
                            streamLink={view.streamLink} />}

            </div>
        </div>
    );
};

export default App;
