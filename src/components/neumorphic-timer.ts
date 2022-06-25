import * as React from 'react';
import './neumorphic-timer.css';

// const App: FC<Props> = 

const Badge: FC<Props> = (props: Props) => {
    const { className, id, size, style } = props;
    return (
      <div
        className={classnames(STYLE.wrapper, className)}
        id={id}
        style={style}
        data-size={size || DEFAULTS.SIZE}
      >
        {props.size == 18 ? (
          props.children
        ) : props.size == 12 ? (
          <Icon
            name="unread"
            weight="bold"
            scale={12}
            fillColor={'var(--badge-background)'}
            strokeColor="none"
          />
        ) : null}
      </div>
    );
  };
  
  export default Badge;
  