import React from 'react';
import { Button } from './Button';

interface ThumbProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What Image content?
   */
  imgContent:string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the input be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Label String to enter?
   */
  label?: string;
  /**
   * Desc String to enter?
   */
  desc?: string;

  /**
   * Desc String to enter?
   */
  btnTxt: string;

}

/**
 * Primary UI component for user interaction
 */
export const ThumbCard = ({
  primary=false,
  size = 'medium',
  imgContent,
  label,
  desc,
  btnTxt,
  ...props
}: ThumbProps) => {
  return (
    <div className="card w-64 bg-base-100 drop-shadow-md shadow-xl">
        <figure className="px-5 pt-8">
            <img src={imgContent} alt="tablet" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{label}</h2>
          <div className='flex items-center'>
            <p className='text-xl'>{desc}</p>
            <div className="card-actions">
                <Button
                  primary = {true}
                  backgroundColor={'#ddd'}
                  label={btnTxt}
                />  
            </div>
          </div>
            
        </div>
    </div>
    
  );
};
