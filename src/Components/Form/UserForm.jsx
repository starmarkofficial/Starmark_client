import React from 'react'

function UserForm() {
  return (
    <div><section className="p-6 bg-gray-100 text-gray-900">
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12">
    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-sm py-1 px-2 outline-none shadow-xl bg-gray-100">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="username" className="text-sm">Username</label>
					<input id="username" type="text" placeholder="Username" className="w-full rounded-sm py-1 px-2 outline-none focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="website" className="text-sm">Website</label>
					<input id="website" type="text" placeholder="https://" className="w-full rounded-sm py-1 px-2 outline-none focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="bio" className="text-sm">Bio</label>
					<textarea id="bio" placeholder="" className="w-full rounded-sm py-1 px-2 outline-none focus:ring focus:ri focus:ri border-gray-300 text-gray-900"></textarea>
				</div>
				<div className="col-span-full">
					<label for="bio" className="text-sm">Photo</label>
					<div className="flex items-center space-x-2 mb-4">
						<img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full bg-gray-500 bg-gray-300" />
						<button type="button" className="px-4 py-2 border rounded-sm py-1 px-2 outline-none border-gray-800">Change</button>
					</div>
				</div>
			</div>
		</fieldset>
        
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-sm py-1 px-2 outline-none shadow-xl bg-gray-100">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="firstname" className="text-sm">First name</label>
					<input id="firstname" type="text" placeholder="First name" className="w-full rounded-sm py-1 px-2 outline-none focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="lastname" className="text-sm">Last name</label>
					<input id="lastname" type="text" placeholder="Last name" className="w-full rounded-sm py-1 px-2 outline-none focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="email" className="text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" className="w-full rounded-sm py-1 px-2 outline-none focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="address" className="text-sm">Address</label>
					<input id="address" type="text" placeholder="" className="w-full rounded-sm py-1 px-2 outline-none focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="city" className="text-sm">City</label>
					<input id="city" type="text" placeholder="" className="w-full rounded-sm py-1 px-2 outline-none focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="state" className="text-sm">State / Province</label>
					<input id="state" type="text" placeholder="" className="w-full rounded-sm py-1 px-2 outline-none focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="zip" className="text-sm">ZIP / Postal</label>
					<input id="zip" type="text" placeholder="" className="w-full rounded-sm py-1 px-2 outline-none focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
				</div>
			</div>
		</fieldset>
		
	</form>
</section></div>
  )
}

export default UserForm