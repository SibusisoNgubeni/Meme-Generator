// src/components/textcolor.js
// src/components/textcolor.js
import React from "react";

export default function ColorPicker({ topTextColor, bottomTextColor, handleChange }) {
    return (
        <div className="color-picker">
            <h3>Top Text Color:</h3>
            <select name="topTextColor" value={topTextColor} onChange={handleChange}>
                {["white", "black", "red", "blue", "green", "yellow", "orange", "purple"].map(color => (
                    <option key={color} value={color}>
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                    </option>
                ))}
            </select>
            <h3>Bottom Text Color:</h3>
            <select name="bottomTextColor" value={bottomTextColor} onChange={handleChange}>
                {["white", "black", "red", "blue", "green", "yellow", "orange", "purple"].map(color => (
                    <option key={color} value={color}>
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
}
