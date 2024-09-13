import React, { useState } from 'react';
import './Input.scss';
import clsx from 'clsx';
import Button from '../Button.tsx/Button';

type InputProps = {
  isExpandedByDefault?: boolean;
  placeholder?: string;
  value?: string;
  onChangeValue: (value: string) => void;
  className?: string;
  onCommentAdd: () => void;
};

const Input: React.FC<InputProps> = ({
  isExpandedByDefault,
  placeholder,
  value,
  onChangeValue,
  className,
  onCommentAdd,
}) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  const handleFocus = () => {
    setIsExpand(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsExpand(false);
    }, 100);
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeValue(event.target.value);
  };

  const onCommentSubmit = () => {
    try {
      onCommentAdd();
    } catch (error) {
      console.error('Ошибка при добавлении комментария:', error);
    }
  };

  return (
    <div className={clsx('input', className)}>
      <div className="input__area">
        <form>
          <textarea
            className={clsx((isExpand || isExpandedByDefault) && 'expanded')}
            placeholder={placeholder}
            onChange={onChangeInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
          />
        </form>
      </div>
      <div
        className={clsx(
          'input__submit',
          (isExpand || isExpandedByDefault) && 'expanded'
        )}
      >
        <span>Пишите корректно и дружелюбно</span>
        <Button
          disable={!value}
          onClick={onCommentSubmit}
          className={clsx('button', !value && 'disable')}
          text="Отправить"
        />
      </div>
    </div>
  );
};

export default Input;
