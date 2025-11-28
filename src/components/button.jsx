import React from "react";
import "./button.css";

export default function Button({
    children,
    name,
    fontColor,
    bgColor,
    borderStyle, 
    borderColor,
    variant, 
    onClick,
    style: userStyle,
    className = "",
    disabled = false,
    ...rest
}) {
    // Build class names for variant and border style
    let variantClass = "custom-btn";
    
    if (variant) {
        variantClass = `custom-btn custom-btn-${variant}`;
    } else if (!bgColor) {
        variantClass = "custom-btn custom-btn-outline";
    } else {
        variantClass = "custom-btn";
    }

    // Add border style classes
    let borderStyleClass = "";
    if (borderStyle === "pill") {
        borderStyleClass = "custom-btn-pill";
    } else if (borderStyle === "rounded") {
        borderStyleClass = "custom-btn-rounded";
    } else if (borderStyle === "double") {
        borderStyleClass = "custom-btn-double";
    }

    const style = {
        color: fontColor || undefined,
        ...(bgColor ? { backgroundColor: bgColor } : {}),
        ...(borderColor ? { borderColor: borderColor } : {}),
        ...userStyle,
    };

    // Apply inline border style only for custom cases
    if (borderStyle === "outline" && !bgColor) {
        style.backgroundColor = "transparent";
        style.borderStyle = "solid";
        style.borderWidth = style.borderWidth || "2px";
    }
    if (borderStyle === "double" && !userStyle?.borderWidth) {
        style.borderStyle = "double";
        style.borderWidth = style.borderWidth || "3px";
    }

    const finalClassName = `${variantClass} ${borderStyleClass} ${className}`.trim();

    return (
        <button
            type="button"
            className={finalClassName}
            style={style}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {children ?? name}
        </button>
    );
}