import { getUserName } from "../routes/api/app.ts";

export default function Modal() {

    const handleClick = (e) => {
        e.preventDefault();
        const nameInput = e.target.elements['name'].value
        getUserName(nameInput);
    }
    return (
      <div>
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div class="sm:center sm:items-center">
                        <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                        <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Welcome to Fresh Chat</h3>
                        <div class="mt-2">
                            <p class="text-sm text-gray-500">Enter your name</p>
                            <form onSubmit={handleClick}>
                                <input class="border-2 border-gray-600 mt-2" type="text" id="name" name="name" placeholder="name"></input>
                                <div class="bg-gray-50 px-4 py-3 sm:center sm:flex-row-reverse sm:px-6">
                                    <button type="submit" class="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 sm:ml-3 sm:w-auto mr-2">Enter</button>
                                    <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  