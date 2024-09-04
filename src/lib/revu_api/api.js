const api = function (endpoint, trigger) {
    let url = "http://127.0.0.1:5000/api";
    let tr_data = {
        action: endpoint,
        trigger: trigger
    }

    async function send_request(method, data) {
        try {
            tr_data.info = data;
            const response = await fetch(url, {
                method: String(method).toUpperCase(),
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tr_data),
            });
            return await response.text();
        } catch (error) {
            console.error('Error:', error);
            return "";
        }
    }

    return {
        post: async function (data) {
            return await send_request("post", data)
        },
        get: function () {

        }
    }
}

const revu_api = function () {
    return new revu_api.fn.init();
}
revu_api.fn = revu_api.prototype = {
    create_user_with_email_and_password: async (email, password, options) => {
        options = typeof options === "undefined" ? {} : options;
        options.create_type = "emp";
        let res = await api("auth", "create_user").post({email, password, options});
        return revu_api.responseHandler(res);
    },
    login_with_password: async (email, password, options) => {
        options = typeof options === "undefined" ? {} : options;
        options.login_type = "password";
        let res = await api("auth", "login_user").post({email, password, options});
        return revu_api.responseHandler(res);
    }
};
(revu_api.fn.init = function () {

}).prototype = revu_api.fn;
revu_api.responseHandler = function (json_string) {
    let {data, success, ...options} = JSON.parse(json_string);
    return {
        data: data,
        ok: success,
        ...options
    }
};

// export default revu_api;

async function ss() {
    // let res = await revu_api().create_user_with_email_and_password("mms@gmail.com", "kjhbjh", options = {
    //     name: "mark",
    //     "userRole": "student"
    // })
    let res = await revu_api().login_with_password("mms@gmail.com", "kjhbjh");
    console.log(res)
}

ss().then();