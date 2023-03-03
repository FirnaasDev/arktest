import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the input be?
   */
  size?: '32' | '64' | '96';
  /**
   * Label String to enter?
   */
  label?: string;
  /**
   * Icon Boolean
   */
  icon?:boolean;

  /**
   * Additional Class
   */
  className?:string;

  /**
   * type contents
   */
  type: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
/**
   * Optional click handler
   */
  placeholder:string;
}

/**
 * Primary UI component for user interaction
 */
export const SimpleInput = ({
  primary = false,
  size = '64',
  placeholder,
  type,
  label,
  icon,
  className,
  ...props
}: InputProps) => {
  const mode = primary ? 'storybook-Input--primary' : 'storybook-Input--secondary';
  return (
    <div className={`flex flex-col w-${size} ${className}`}>
      <label className='text-white text-2xl mb-2'>{label}</label>
      <input
      type={type}
      className={[styles.storybookInput, `w-${size}`, mode].join(' ')}
      placeholder={placeholder}
      ></input>
      {icon&&
        <span className="absolute inset-y-0 right-0 flex items-center pl-2">
        </span>
      }
    </div>
    
  );
};
