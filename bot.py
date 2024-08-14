import asyncio
from aiogram import Bot, Dispatcher
from aiogram.filters import Command
from aiogram.types import Message, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo

# Ваш токен бота
TOKEN = '7207040124:AAHuWchouAISQq-tsIxlWQIDppBGGpdzceY'

# Создание экземпляра бота и диспетчера
bot = Bot(token=TOKEN)
dp = Dispatcher()

# Обработчик команды /start
@dp.message(Command("start"))
async def start_command(message: Message):
    # Создание кнопки с WebApp
    web_app_button = InlineKeyboardButton(text="Веб приложение", web_app=WebAppInfo(url="https://soft-sable-bc4de2.netlify.app/"))

    # Создание инлайн клавиатуры и добавление кнопки
    keyboard = InlineKeyboardMarkup(inline_keyboard=[[web_app_button]])

    # Отправка сообщения с инлайн-кнопкой
    await message.answer("Вот ваш бот", reply_markup=keyboard)

# Основная функция запуска бота
async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
